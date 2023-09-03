import ColorCell from "../ColorCell/ColorCell"

interface ColorRowProps {
    colors: Array<string>,
    size: number,
    mutable?: boolean,
}

export default function ColorRow(props: ColorRowProps) {

    const { colors, size } = props
    const colorCells = colors.map(color => {
        return <ColorCell color={color} />
    })
    let emptyCells = [];
    if (colors.length < size) {
        for (let i = 0; i < (size - colors.length); i++) {
            emptyCells.push(<ColorCell />)
        }
    }
    // console.log('colorCells :>> ', colorCells);
    // console.log('emptyCells :>> ', emptyCells);
    return (
        <div style={{ display: "flex" }}>
            {colorCells} {emptyCells}
        </div>
    )
}