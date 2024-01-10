

interface FindProps {
    typeEntity: string
    field: string,
    condition: string
}
export const find = (props: FindProps, state :any) => {
    const name = props.typeEntity.split(".")[0];
    const data = props.typeEntity.split(".")[1];
    const entities = state[name][data].filter((entity:any) => {
        return entity[props.field].toLowerCase().includes(props.condition.toLowerCase()); 
    });
    return entities;
}