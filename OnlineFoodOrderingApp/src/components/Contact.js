const Contact=()=>{
return (<div>
    <h1 className="font-bold text-3xl p-4 m-4">Contact US</h1>

    <form >
        <input type="text" className="border border-black p-2 m-2" placeholder="Name"></input>
        <input type="text" className="border border-black p-2 m-2" placeholder="Message"></input>
        <button className="rounded-lg  border border-black bg-slate-400 p-2 m-2">Submit</button>
    </form>
</div>)
}
export default Contact;