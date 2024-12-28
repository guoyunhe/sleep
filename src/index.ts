export interface SleepOptions {
  lastNameUpperCase?: boolean;
}

export function sleep(firstName: string, lastName: string, options?: SleepOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
