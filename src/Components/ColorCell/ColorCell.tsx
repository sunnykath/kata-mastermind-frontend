import { useState } from 'react'

import './ColorCell.css';

interface ColorCellProps {
    color?: string | null,
    mutable?: boolean,
}

export default function ColorCell(props: ColorCellProps) {

    const { color: colorProp, mutable = false } = props;

    const [color, setColor] = useState(colorProp);

    const onClick = () => {
        if (mutable) setColor(null)
    }

    return (
        <div onClick={onClick} className={`cell ${color}`} />
    )
}