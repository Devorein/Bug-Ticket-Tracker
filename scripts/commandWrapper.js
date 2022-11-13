async function commandWrapper(command, skip, message) {
  if (!skip) {
    try {
      await command();
      console.log(chalk.green(`✔️ ${message}`));
    } catch (err) {
      console.log(err);
      console.log(chalk.red(`❌ ${message}`));
      process.exit(1);
    }
  } else {
    console.log(chalk.blue(`🔵 ${message}`));
  }
}

module.exports = commandWrapper;
