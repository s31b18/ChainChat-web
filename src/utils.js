export async function getFileInfo(afid){
    const res = await fetch(`http://39.100.9.55:8035/getFileInfo?afid=${afid}`)
    if(res.status===200){
        const data = await res.json()
        return data
    }else{
        return null
    }
}

export async function getRNodeInfo(ip){
    const res = await fetch(`http://39.100.9.55:8035/getRNodeInfo?ip=${ip}`)
    if(res.status===200){
        const data = await res.text()
        return data
    }else{
        return null
    }
}

export async function download(afid){
    const res = await fetch(`http://39.100.9.55:8035/download?afid=${afid}`)
}

export async function getDownloadInfo(afid){
    const res = await fetch(`http://39.100.9.55:8035/getDownloadInfo?afid=${afid}`)
    if(res.status ===200){
        return await res.json()
    }else{
        return null
    }

}