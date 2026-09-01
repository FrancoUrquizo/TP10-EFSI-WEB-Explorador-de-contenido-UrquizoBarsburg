const FALLBACK_FLAG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60"><rect width="100" height="60" fill="#e5e7eb"/><text x="50" y="36" font-size="10" text-anchor="middle" fill="#9ca3af" font-family="sans-serif">Sin bandera</text></svg>`
  );

const getId = (raw) => raw?.codes?.alpha_3 || raw?.uuid || raw?.codes?.ccn3 || "";

const safeCapital = (capitals) => {
  if (!Array.isArray(capitals) || capitals.length === 0) return null;
  return capitals[0]?.name ?? null;
};

export const mapCountry = (raw) => {
  return {
    cca3: getId(raw),
    name: { common: raw?.names?.common ?? "Sin nombre" },
    flags: { svg: raw?.flag?.url_svg || FALLBACK_FLAG },
    capital: raw?.capitals?.map?.(({ name }) => name) ?? [],
    capitalName: safeCapital(raw?.capitals),
    region: raw?.region ?? "—",
  };
};

export const mapCountries = (rawList) =>
  Array.isArray(rawList) ? rawList.map(mapCountry) : [];
