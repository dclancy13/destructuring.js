var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults2 = ([first, second, third, ...rest]) => ({ first, second, third, rest })
