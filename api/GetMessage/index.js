module.exports = async function (context, req) {
  string settingValue = Environment.GetEnvironmentVariable("TEST_KEY_VAULT_REFERENCE");
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Super secret value is:" + settingValue },
  };
};
