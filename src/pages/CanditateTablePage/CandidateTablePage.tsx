import { Suspense } from 'react';
import { CandidateTable } from './CanditateTable/CandidateTable';

export const CandidateTablePage = () => (
    <>
    <div>Кандидаты</div>
    <Suspense> <CandidateTable /></Suspense>
    </>
);
