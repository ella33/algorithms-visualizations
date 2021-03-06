const commandIndentation = '&nbsp;&nbsp;&nbsp;&nbsp;';

/**
 * Recursive function which flattens a command block which describes
 * an instruction with one or more subcommands.
 *
 * @param {Object} item Command block
 * @param {number} offset Number of command indentations to prepend
 * @param {Array} acc An array with the accumulation of commands with indentation
 */
export const flattenCommandBlock = (item, offset, acc) => {
  acc.push(`${commandIndentation.repeat(offset)}${item.command}`);
  if (item.block) {
    for (const subitem of item.block) {
      flattenCommandBlock(subitem, offset + 1, acc);
    }
  }
};

/**
 * Takes an algorithm described by one or many command blocks and flattens
 * it in an array with indentation formatted commands.
 *
 * @param {Array} algo A list of command blocks which describe an algorithm
 * @returns {Array} A list of objects with formatted instructions.
 */
export const flattenAlgorithm = (algo) => {
  let commands = [];
  for (const commandBlock of algo) {
    flattenCommandBlock(commandBlock, 0, commands);
  }

  return commands.map((text, index) => ({
    text, id: index + 1,
  }));
};

/**
 * Utility function which highlights a specific or the next active algorithm
 * command.
 *
 * @param {Object} timeline The anime.js timeline object
 * @param {Object} options Object passing commandNumber or animation options
 */
export function highlightCommand(timeline, { commandNumber, animeOptions = {} } = {}) {
  if (commandNumber < 0) return timeline; /** noop */

  if (!commandNumber) {
    this.activeCommand = (this.activeCommand || 0) + 1;
  }

  const targets = `.command-${commandNumber || this.activeCommand}`;

  return timeline.add({
    targets,
    duration: 500,
    backgroundColor: '#FDFDFC',
    color: '#252525',
    scale: [1, 1.05, 1],
    ...animeOptions,
  });
}

/**
 * Utility function which resets the highlighted commands passed as argument.
 *
 * @param {Object} timeline The anime.js timeline object
 * @param {Array} commands Array of command numbers to reset the highlighted commands
 */
export function resetCommands(timeline, commands) {
  const targets = commands.map((commandNumber) => `.command-${commandNumber}`);

  return timeline.add({
    targets,
    duration: 100,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#fff',
  });
}