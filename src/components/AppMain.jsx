import Flag from 'react-world-flags'
import Films from './Films';
import TvSeries from './TvSeries';

export default function AppMain({ showTitle, movies, tvSeries, renderstars }) {

    const languageFlag = {
        en: 'US',
        it: 'IT',
        fr: 'FR',
        es: 'ES',
        de: 'DE',
        ja: 'JP',
        zh: 'CN',
        ko: 'KR'
    };

    return (
        <main>
            <div className="container">
                {showTitle && (
                    <>
                        <Films movies={movies} renderstars={renderstars} languageFlag={languageFlag} Flag={Flag} />

                        <TvSeries tvSeries={tvSeries} Flag={Flag} languageFlag={languageFlag} renderstars={renderstars} />
                    </>
                )}
            </div>
        </main>
    )
}