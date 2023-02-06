import { intlFormat } from "date-fns"

export const oddConfig = {
  min: 45,
  max: 75,
}

export const evenConfig = { min: 20, max: 35 }

export const convertToDayString = (ts: Date): string =>
  intlFormat(ts, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })
