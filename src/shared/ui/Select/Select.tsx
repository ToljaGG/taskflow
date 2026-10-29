import styles from "./Select.module.css"

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  name: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  disabled?: boolean
}

export function Select({
  label,
  name,
  value,
  options,
  onChange,
  disabled = false,
}: SelectProps) {
  return (
    <div className={styles["wrapper"]}>
      {label && <label htmlFor={name}>{label}</label>}

      <select
        className={styles["select"]}
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
