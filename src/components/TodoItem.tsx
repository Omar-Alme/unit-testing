import DeleteButton from "./DeleteButton";

interface Props {
    id: string;
    label: string;
    onDelete: (id: string) => void;
}

export default function TodoItem({ id, label, onDelete }: Props) {
    return (
        <li>
            {label}{" "}
            <DeleteButton onClick={() => onDelete(id)} />
        </li>
    );
}