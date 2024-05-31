export const sortTrailsFromHardest = trails => {
  const result = [];
  if (!trails) return result;
  trails.includes('black') && result.push('black');
  trails.includes('red') && result.push('red');
  trails.includes('blue') && result.push('blue');
  trails.includes('green') && result.push('green');    
  return result;
}

export const getMaxTrailDifficulty = trails => {
  if (!trails) return null;
  if (trails.includes('black')) return 'black'
  else if (trails.includes('red')) return 'red'
  else if (trails.includes('blue')) return 'blue'
  else if (trails.includes('green')) return 'green'
  return null;
};

export const countLifts = lifts => {
  if (!lifts) return null;
  return lifts.reduce( (acc, curr) => {
    const value = curr.count;
    return Number.isInteger(value) ? acc + value : acc;
  }, 0  );
}

export const removeHttp = url => url && url.replace(/^https?:\/\//, '') 

export const truncateStringCompleteWords = (str, maxLength) => {
  let result = str.slice(0, maxLength)
  const lastSpace = result.lastIndexOf(" ")
  return  result
            .slice(0, lastSpace)
            .replace(/[.,!?-]$/, "")
            .concat('...')  
}

export const sortNewsByLatest = news => news.sort( (a, b) => Date.parse(b.date) - Date.parse(a.date))