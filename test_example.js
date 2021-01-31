import React from 'react';
import { render } from '@testing-library/react';
import Card from '@modules/shared/components/Card/Card';

describe('Card', () => {
    it('render a div with a "card" as a class', () => {
        const { container } = render(
            <Card>
                <p>Test</p>
            </Card>
        );

        expect(container.firstChild).toHaveClass('card');
    });

    it('renders given children as content', () => {
        const { getByText } = render(
            <Card>
                <h4>Card Test content</h4>
                <p>Test text</p>
            </Card>
        );

        expect(getByText('Card Test content')).toBeVisible();
        expect(getByText('Test text')).toBeVisible();
    });
});


///

it('renders a checkbox', () => {
    const props = { label: 'A label', name: 'name1' };
    const { getByText, getByLabelText } = render(<Checkbox {...props} />);

    const label = getByText(props.label);
    expect(label).toBeVisible();

    const inputNode = getByLabelText(props.label, { selector: 'input' });
    expect(inputNode).toBeVisible();
    expect(inputNode).not.toBeChecked();
});

it('renders a checkbox with checked status', () => {
    const props = { label: 'A label', name: 'name1', checked: true };
    const { getByLabelText } = render(<Checkbox {...props} />);

    const inputCheckbox = getByLabelText(props.label, { selector: 'input' });

    expect(inputCheckbox).toBeVisible();
    expect(inputCheckbox).toBeChecked();
});

it('renders a checkbox with error status', () => {
    const props = { label: 'A label', name: 'name1', error: true };
    const { container } = render(<Checkbox {...props} />);

    const checkbox = container.firstChild;

    expect(checkbox).toHaveClass('form__checkbox--error');
});

it('get correctly the value changed', async () => {
    const handleOnChange = jest.fn();
    const props = { label: 'A label', name: 'name1', checked: false, onChange: handleOnChange };
    const { getByLabelText } = render(<Checkbox {...props} />);

    const labelCheckbox = getByLabelText(props.label);
    const inputCheckbox = getByLabelText(props.label, { selector: 'input' });
    fireEvent.click(labelCheckbox);

    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(inputCheckbox).toBeChecked();
});

//////////

describe('CartList', () => {
    it('render Product Title', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getByText } = render(<CartList products={[aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getByText('aProductName')).toBeVisible();
    });

    it('renders Product quantity', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getByText } = render(<CartList products={[aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getByText('1')).toBeVisible();
    });

    it('renders remove cta button', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getByText } = render(<CartList products={[aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getByText('x')).toBeVisible();
    });

    it('show "Online price" text to the user', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getByText } = render(<CartList products={[aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getByText('Online price')).toBeVisible();
    });

    it('should render only one Product event if the user select same Product multiple times', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getAllByText } = render(<CartList products={[aProduct, aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getAllByText('aProductName').length).toBe(1);
    });

    it('Should calculate the total of a product depend on the quantity', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getByText } = render(<CartList products={[aProduct, aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getByText('2 * CH 10')).toBeVisible();
    });

    it('Should calculate the total of selected products', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const { getByText } = render(<CartList products={[aProduct, aProduct]} onRemove={jest.fn()} />, { i18next });

        expect(getByText(/Total[^]*CHF[^]*X\+4\*Y/)).toBeVisible();
    });

    it('When user clicks on remove button of a single product, should remove all products references', () => {
        const aProduct = createAProduct({ name: 'aProductName' });
        const onRemove = jest.fn();
        const { getByText } = render(<CartList products={[aProduct, aProduct]} onRemove={onRemove} />, { i18next });

        const removeButton = getByText('x');
        fireEvent.click(removeButton);

        expect(onRemove).toHaveBeenCalledWith('anId');
    });
})