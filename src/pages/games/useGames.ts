import { useFirestore, useFirestoreCollection, useFirestoreCollectionData, useUser } from "reactfire";

export function useGames() {
    const db = useFirestore();
    const {data: user } = useUser(undefined, {suspense: true});

    const gamesQuery = db.collection('games').where('participants', 'array-contains', user.uid);
    const {data: games} = useFirestoreCollectionData<{foo: string}>(gamesQuery, {suspense: true, idField: 'uid'});

    return games;
}