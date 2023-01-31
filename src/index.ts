import { ApolloServer } from "apollo-server"
import path from "path"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { resolvers } from "../prisma/generated/type-graphql/index"
import { context } from "./context"

const main = async () => {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(
      __dirname,
      "../prisma/generated/generated-schema.graphql"
    ),
    validate: false,
  })

  const server = new ApolloServer({
    schema,
    context,
  })
  server.listen({ port: 4000 }, () =>
    console.log("🚀 Server ready at: http://localhost:4000")
  )
}

main().catch(console.error)
