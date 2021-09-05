import axios from 'axios'
const baseUrl = '/api/path'

const examplePOST = async params => {
  const response = await axios.post(baseUrl, params)
    return response.data
}

const exampleGET = async () => {
  const response = await axios.get(baseUrl)
    return response.data
}

const exampleServices = {
  examplePOST,
  exampleGET
}
  
export default exampleServices