import React from 'react'
import { useRoutes } from 'react-router-dom'

const Collectionid = () => {
    const router = useRoutes()
  return (
    <div>{router.query.CollectionId}</div>
  )
}

export default Collectionid