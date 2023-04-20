import React, { useEffect, useState } from 'react'


export default function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    setData(res)
                    setLoading(false)
                }, 2000)
            })//clean up function: , () => {}
    }, [])

    return [data, loading]
}
