export const eJobResult = {
    Queued: 0,
    Ongoing: 1,
    Success: 2,
    Failed: 3,
} as const;

export type eJobResult = typeof eJobResult[keyof typeof eJobResult];