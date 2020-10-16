const END_POINT_BENEFITS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=102&_embed"

const END_POINT_CHHR = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=106&_embed"

const END_POINT_SERVICES = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=105&_embed"
const END_POINT_EVENTS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=107&_embed"
const END_POINT_INFOS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=110&_embed"

const END_POINT_FAQS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=104&_embed"
const END_POINT_GUIDANCES = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=108&_embed"
const END_POINT_OTHERS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=109&_embed"

const END_POINT_AFDB = "https://chhr.afdb.org/wp-json/wp/v2/posts"


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
    case 'guidances':
      uri = END_POINT_GUIDANCES
      break
    case 'otherDocs':
      uri = END_POINT_OTHERS
      break
  
    default: uri = END_POINT_INFOS
      break
  }

  try {
      let result = await fetch(uri)
      result = await result.json()

      console.log('result', result)

      return result

    } catch (error) {
      console.log(error)
  }
}



export async function getBenefitPosts() {
    try {
      let posts = await fetch(END_POINT_BENEFITS)
      let result = await posts.json()

      console.log('result', result)

      return result

    } catch (error) {
      console.log(error)
  }
}