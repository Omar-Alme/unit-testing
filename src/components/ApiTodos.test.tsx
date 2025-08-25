import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ApiTodos from "./ApiTodos";

describe("ApiTodos (mocked)", () => {
    beforeEach(() => {
        // @ts-ignore
        global.fetch = vi.fn();
    });

    it("renders todos when fetch succeeds", async () => {
        // @ts-ignore
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ["Play ball", "Wash car"],
        });

        render(<ApiTodos />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByRole("list", { name: /api-todos/i })).toBeInTheDocument();
        });

        expect(screen.getByText("Play ball")).toBeInTheDocument();
        expect(screen.getByText("Wash car")).toBeInTheDocument();
    });

    it("shows error when fetch fails", async () => {
        // @ts-ignore
        global.fetch.mockResolvedValueOnce({ ok: false });

        render(<ApiTodos />);
        await waitFor(() => {
            expect(screen.getByRole("alert")).toHaveTextContent(/failed to load/i);
        });
    });
});
