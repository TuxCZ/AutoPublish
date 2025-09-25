import Button from "devextreme-react/button";
import CardSectionHeader from "../../../../components/panels/CardSectionHeader";

const CurrentActionHeader = () => {
    return (
        <CardSectionHeader label="Aktuálně publishovaný projekt">
            <Button type="default" icon="info" text="Detail" style={{ marginRight: 6 }} className="text-gray" />
            <Button type="danger" icon="remove" text="Zrušit akci" className="text-gray" />
        </CardSectionHeader>
    );
}

export default CurrentActionHeader;