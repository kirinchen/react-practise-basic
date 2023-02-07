const Loading = (props: any): JSX.Element => (
    <div>
        {props.isLoad ? <div>loding...</div> : null}
    </div>
)


const Loading2 = (props: any): JSX.Element => (
    <div>
        {props.isLoad && <div>loding...</div>}
    </div>
)



export default { Loading, Loading2 } 