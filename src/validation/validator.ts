import { Inspector, InspectorMap, Scheme, ValueWrapper } from './types';

const checkMinLen = (value: string, target: number) => {
  return value.length >= target;
};

const checkMaxLen = (value: string, target: number) => {
  return value.length <= target;
};

const checkPattern = (value: string, target: RegExp) => {
  return target.test(value);
};

const inspectors: InspectorMap = {
  minLen: checkMinLen,
  maxLen: checkMaxLen,
  pattern: checkPattern,
};

function findInspector(name: string) {
  const inspector = inspectors[name as keyof InspectorMap];
  return inspector as Inspector<unknown>;
}

class Validator {
  ok: boolean = true;

  check(scheme: Scheme, wrapper: ValueWrapper): ValueWrapper {
    const restrictions = Object.entries(scheme);
    for (let i = 0; i < restrictions.length; i += 1) {
      const inspector = findInspector(restrictions[i][0]);
      if (!inspector(wrapper.value, restrictions[i][1].target)) {
        this.ok = false;
        return { ...wrapper, error: restrictions[i][1].message };
      }
    }
    return wrapper;
  }
}

export default Validator;
