
const controller = new AbortController()
const { signal } = controller

const END_POINT_AFDB = "https://chhr.afdb.org/wp-json/wp/v2"

const END_POINT_IMAGE = `${END_POINT_AFDB}/media`

const END_POINT_POST = `${END_POINT_AFDB}/posts`
const END_POINT_CAT = `${END_POINT_AFDB}/posts?categories`

const END_POINT_SERVICES = `${END_POINT_AFDB}/${END_POINT_CAT}=105&_embed`
const END_POINT_EVENTS = `${END_POINT_AFDB}/${END_POINT_CAT}=107&_embed`
const END_POINT_INFOS = `${END_POINT_AFDB}/${END_POINT_CAT}=110&_embed`
const END_POINT_FAQS = `${END_POINT_AFDB}/${END_POINT_CAT}=104&_embed`
const END_POINT_GUIDANCES = `${END_POINT_AFDB}/${END_POINT_CAT}=108&_embed`
const END_POINT_OTHERS = `${END_POINT_AFDB}/${END_POINT_CAT}=109&_embed`

const END_POINT_BENEFITS = `${END_POINT_AFDB}/${END_POINT_CAT}=102&_embed`
const END_POINT_CHHR = `${END_POINT_AFDB}/${END_POINT_CAT}=106&_embed`


export const getData = async (category) => {

  let uri = ''

  switch (category) {
    case 'services':
      uri = END_POINT_SERVICES
      break
    case 'events':
      uri = END_POINT_EVENTS
      break
    case 'faqs':
      uri = END_POINT_FAQS
      break
    case 'news':
      uri = END_POINT_INFOS
      break
    case 'guidances':
      uri = END_POINT_GUIDANCES
      break
    case 'otherDocs':
      uri = END_POINT_OTHERS
      break
  
    default: uri = END_POINT_AFDB
      break
  }

  try {
      let result = await fetch(uri, { signal })
      result = await result.json()

      return result

    } catch (error) {
      console.log(error)
  }
}


export async function getPost(postId) {
    try {
      let post = await fetch(`${END_POINT_POST}/${postId}`)
      let result = await post.json()

      return result

    } catch (error) {
      console.log(error)
  }
}

export async function getImage(imgId) {
    try {
      let post = await fetch(`${END_POINT_IMAGE}/${imgId}`)
      let result = await post.json()

      return result

    } catch (error) {
      console.log(error)
  }
}