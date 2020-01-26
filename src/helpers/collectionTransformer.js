const collectionTransformer = collection => {
    const res = []
    collection.forEach(doc =>
      res.push({
        id: doc.id,
        ...doc.data(),
      }),
    )
    return res
}

export default collectionTransformer