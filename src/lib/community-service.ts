// Contrato para backend futuro. Nenhum endpoint de publicação é exposto sem auth e moderação.
export type Topic = { id: string; title: string; category: string; resolved: boolean; createdAt: string };
export interface CommunityService {
  available: boolean;
  list(options: { query?: string; category?: string; cursor?: string; filter?: 'recent' | 'unanswered' | 'resolved' }): Promise<{ topics: Topic[]; nextCursor: string | null }>;
}
export const communityService: CommunityService = { available: false, async list() { return { topics: [], nextCursor: null }; } };
