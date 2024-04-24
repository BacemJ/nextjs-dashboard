
export default function FormErrors(
  {
    errors
}: {
    errors:string[]|undefined
}
) {
    if (errors) {
        return (
            <div id="customer-error" aria-live="polite" aria-atomic="true">
                {
                    errors.map(
                            (e: string) => (
                            <p className="mt-2 text-sm text-red-500" key={e}>
                                {e}
                            </p>
                        )
                    )
                }
            </div>
        )
  } else {
    return null;
  }
}