const usageData = {
  AU: { used: 1, label: "Breeding in Australia for the past 3 decades" },
  US: { used: 1, label: "Starting selling our genetic here in 2018" },
};
new svgMap({
  targetElementID: "usage-map",
  // Colours: countries with a value get colorMax, everyone else gets colorNoData
  colorMax: getComputedStyle(document.documentElement)
    .getPropertyValue("--color-accent")
    .trim(),
  colorMin: getComputedStyle(document.documentElement)
    .getPropertyValue("--color-accent")
    .trim(),
  colorNoData: getComputedStyle(document.documentElement)
    .getPropertyValue("--color-muted")
    .trim(),
  hideFlag: true,
  hideTooltip: true,
  mouseWheelZoomEnabled: false,
  data: {
    data: {
      used: { name: "Status", format: "{0}" },
      label: { name: "Description", format: "{0}" },
    },
    applyData: "used",
    values: usageData,
  },
});
