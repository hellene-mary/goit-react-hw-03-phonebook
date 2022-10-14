import css from './Filter.module.css';

export function Filter({ onChange }) {
    return (
        <label className={css.filterLabel}>
            Find contact by the name
            <input type="text" name="filter" onChange={onChange} />
        </label>
    );
}
