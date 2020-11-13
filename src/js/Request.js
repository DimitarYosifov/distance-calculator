export default class Request {
    getData(reqParams, onReceive) {
        (async () => {
            let res = await fetch(reqParams.name, {
                method: reqParams.method,
                headers: reqParams.headers,
                body: reqParams.body
            });
            try {
                let data = await res.json();
                data = JSON.parse(data);
                console.log(data)
                onReceive(data);
            } catch (err) {
                console.log(err)
            }
        })()
    }
}
