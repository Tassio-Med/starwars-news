import Prismic from '@prismicio/client'

export function getPrismiscClient(req?: unknown){
  const prismic = Prismic.client('https://starwarsnews.cdn.prismic.io/api/v2', {
    req,
  })

  return prismic;
}