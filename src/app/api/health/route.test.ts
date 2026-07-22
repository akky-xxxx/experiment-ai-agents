import { GET } from "./route"

describe("GET /api/health", () => {
  it("returns ok status", async () => {
    const response = GET()
    const body: unknown = await response.json()

    expect(response.status).toBe(200)
    expect(body).toStrictEqual({ status: "ok" })
  })
})
