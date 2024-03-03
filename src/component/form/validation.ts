function isEmail(string: string) {
  const re =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  return re.test(string)
}

/**
 *
 * @param value - email
 * @returns
 */
function email(value: string) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null
}

function isDirty(value: string | number) {
  return value || value === 0
}

/**
 *
 * @param requiredFields - required fields
 * @param values - values
 * @returns  - required fields
 */
function required(
  requiredFields: readonly string[],
  values: Record<string, string>
): Record<string, string> {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
    }),
    {}
  )
}

export { email, required }
