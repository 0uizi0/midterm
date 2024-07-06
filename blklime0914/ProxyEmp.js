export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        return target[prop];
      },

      set(target, prop, value) {
        if (prop === 'fullName') {
          const [ firstName, lastName ] = value.split(' ');;
          if (!lastName) {
            target.lastName = firstName.toUpperCase();
            target.fullName = `${target.firstName} ${target.lastName}`;
            return target[prop];
          }
          target.firstName = firstName;
          target.lastName = lastName.toUpperCase();
          target.fullName = `${target.firstName} ${target.lastName}`;
        }
        return target[prop];
      },
    });
  }
}
