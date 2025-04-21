import { Moon, Sun } from '../../config/icons'
import { FC } from 'react'

interface ToggleThemeProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  value: string
  checked: boolean
  currentTheme: string
}

const ToggleTheme: FC<ToggleThemeProps> = ({
  onChange,
  id,
  value,
  checked,
  currentTheme,
}) => {
  return (
    <label
      htmlFor={id}
      className="text-theme-text absolute top-3 right-6 flex items-center text-base font-bold"
    >
      Mode:
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        value={value}
        checked={checked}
        className="peer group invisible m-0 border border-red-600"
      />
      <span className="after:bg-dark after:animate-slide-off peer-checked:bg-dark peer-checked:after:animate-slide-on relative inline-block h-[26px] w-[52px] cursor-pointer rounded-[50px] bg-white after:absolute after:top-[3px] after:left-[5px] after:inline-block after:h-[21px] after:w-[21px] after:items-center after:justify-center after:rounded-[50%] after:content-[''] peer-checked:after:bg-white">
        {currentTheme === 'light' ? (
          <Sun className="animate-slide-off absolute top-[5px] left-[7px] z-[1]" />
        ) : (
          <Moon className="animate-slide-on absolute top-[5px] left-[7px] z-[1]" />
        )}
      </span>
    </label>
  )
}

export default ToggleTheme
