export const sortTrailsFromHardest = trails => {
  const result = [];    
  trails.includes('black') && result.push('black');
  trails.includes('red') && result.push('red');
  trails.includes('blue') && result.push('blue');
  trails.includes('green') && result.push('green');    
  return result;
}

export const getMaxTrailDifficulty = ( trails ) => {
  if (trails.includes('black')) return 'black'
  else if (trails.includes('red')) return 'red'
  else if (trails.includes('blue')) return 'blue'
  else if (trails.includes('green')) return 'green'
  return null;
};