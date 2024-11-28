import ReuseBt from "./3";

function ReuseBt1(){
    return (
        <div className="space-y-4 m-4">
        <ReuseBt text="Primary Button" color="primary" />
        <ReuseBt text="Success Button" color="success" />
        <ReuseBt text="Danger Button" color="danger" />
        <ReuseBt text="Warning Button" color="warning" />
        <ReuseBt text="Custom Button" color="secondary" />
        </div>
    );
}

export default ReuseBt1;