const storageWorker = {
  clear() {
    localStorage.clear();
  },

  get<T>(name: string): T[] {
    const data = localStorage.getItem(name);
    return data !== null ? JSON.parse(data) : [];
  },

  set(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

const contains = (where: string[] | number[], what: string[] | number[]) => {
  if (
    !what ||
    !where ||
    where.length <= 0 ||
    typeof what === 'string' ||
    typeof where === 'string'
  ) {
    return false;
  }
  for (let i = 0; i < what.length; i += 1) {
    for (let j = 0; j < where.length; j += 1) {
      if (what[i] === where[j]) {
        break;
      }
      if (j === where.length - 1) {
        return false;
      }
    }
  }
  return true;
};

const paramsFilterMatcher = <T, R>(state: T[], data: Partial<R>) => {
  const entries = Object.entries(data);

  const stateFiltered = state.filter((pr) => {
    return !entries
      .reduce((prev: boolean[], next) => {
        const [key, value] = next as [keyof T, any];
        if (pr[key] === value || value.includes(pr[key]) || contains(pr[key] as any, value)) {
          prev.push(true);
          return prev;
        }
        prev.push(false);
        return prev;
      }, [])
      .includes(false);
  });

  return stateFiltered;
};

export { storageWorker, paramsFilterMatcher, contains };
