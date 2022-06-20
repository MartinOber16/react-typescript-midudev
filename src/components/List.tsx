import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}

// export default function List({ subs }: Props) {
// const List: React.FunctionComponent<Props> = ({ subs }) => {
// const List: React.FC<Props> = ({ subs }) => { // Soporta children y otras cosas mas
const List = ({ subs }: Props) => {

    const renderList = (): JSX.Element[] => {
        return (
            subs?.map(sub => {
                return (
                    <li key={sub.nick}>
                        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                        <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                        <p>{sub.description?.substring(0, 100)}</p>
                    </li>
                )
            })
        )
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;