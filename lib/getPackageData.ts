import "server-only";

const TENANT = process.env.SAFEDEP_TENANT_ID!;
const API_KEY = process.env.SAFEDEP_API_KEY!;

export async function getPackageData(
  ecosystem: string,
  name: string,
  version: string
) {
  try {
    /* 1️⃣ INSIGHTS API */
    const insightsRes = await fetch(
      `https://${TENANT}/api/v1/insights/package/${ecosystem}/${name}/${version}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    // If API down → return fallback mock
    if (!insightsRes.ok) {
      console.error("INSIGHTS API FAILED:", insightsRes.status);

      return {
        package: { name, version },
        risk: { score: 0, level: "Unknown" },
        metrics: {},
        vulnerabilities: [],
        malysis: [],
      };
    }

    const insights = await insightsRes.json();

    /* 2️⃣ MALYSIS API (optional) */
    const malysisRes = await fetch(
      `https://${TENANT}/api/v1/malysis/package/${ecosystem}/${name}/${version}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const malysis = malysisRes.ok ? await malysisRes.json() : [];

    /* FINAL NORMALIZED RESPONSE */
    return {
      package: {
        name: insights.package?.name ?? name,
        version: insights.package?.version ?? version,
      },

      risk: insights.risk ?? { score: 0, level: "Unknown" },

      metrics: insights.metrics ?? {},

      vulnerabilities: insights.vulnerabilities ?? [],

      malysis,
    };
  } catch (err) {
    console.error("SAFEDEP API ERROR:", err);

    return {
      package: { name, version },
      risk: { score: 0, level: "Unknown" },
      metrics: {},
      vulnerabilities: [],
      malysis: [],
    };
  }
}
