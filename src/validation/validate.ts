import { checkerSet } from './constants';
import {
  Checker,
  CheckerSet,
  Rule,
  RuleSet,
  RuleTarget,
  Scheme,
  Validatable,
  ValidationResult,
} from './types';

function validate<T extends object>(
  object: Validatable<T>,
  scheme: Scheme<T>,
): ValidationResult<T> {
  const result: ValidationResult<T> = {
    data: { ...object },
    failure: false,
  };

  Object.entries<RuleSet>(scheme).forEach(([prop, ruleSet]) => {
    const { value } = object[prop as keyof T];
    const rules = Object.entries<Rule<RuleTarget>>(ruleSet);

    for (let j = 0; j < rules.length; j += 1) {
      const [ruleName, rule] = rules[j];
      const checker = checkerSet[ruleName as keyof CheckerSet];
      if (!(checker as Checker<RuleTarget>)(value, rule.target)) {
        result.data[prop as keyof T].error = rule.message;
        result.failure = true;
        break;
      }
    }
  });

  return result;
}

export default validate;
