import CheckSVG from './check.svg?react';
import EditSVG from './edit.svg?react';
import DeleteSVG from './delete.svg?react';

console.log('CheckSVG:', CheckSVG);
console.log('DeleteSVG:', DeleteSVG);


import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "edit": color => (
    <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
