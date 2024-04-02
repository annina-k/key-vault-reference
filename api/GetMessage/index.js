module.exports = async function (context, req) {
  // Retrieve the value of the environment variable
  const settingValue = process.env.TEST_KEY_VAULT_REFERENCE;

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Super secret value is: " + settingValue },
  };
};
