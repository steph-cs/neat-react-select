import { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
  label?: string;
}

const Checkbox = ({ indeterminate = false, label, className = "", id, ...props }: CheckboxProps) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label htmlFor={checkboxId} className="inline-flex items-center gap-2 cursor-pointer select-none">
      <span className="relative inline-flex items-center justify-center w-5 h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className="peer sr-only"
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          {...props}
        />
        <span className="w-5 h-5 rounded border-2 border-muted-foreground/40 bg-background transition-all duration-150 peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background flex items-center justify-center">
          {props.checked && !indeterminate && (
            <svg className="w-3.5 h-3.5 text-primary-foreground" viewBox="0 0 14 14" fill="none">
              <path d="M11.5 4L5.5 10L2.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {indeterminate && (
            <svg className="w-3.5 h-3.5 text-primary-foreground" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </span>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  );
};

export default Checkbox;
