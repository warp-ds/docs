export const mapFrameworkStatuses = (data) =>
  data.reduce((acc, framework) => {
    if (framework.status) {
      acc[framework.name.toLowerCase()] = framework.status;
    }
    return acc;
  }, {});
