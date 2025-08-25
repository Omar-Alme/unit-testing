import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TodoList from "./TodoList";

describe("TodoList (integration)", () => {
    it("shows empty state after deleting all items", async () => {
        render(<TodoList />);
        // Delete both items
        const list = screen.getByRole("list", { name: /todo-list/i });

        const first = within(list).getByText("Play ball").closest("li")!;
        await userEvent.click(within(first).getByRole("button"));

        const second = within(list).getByText("Code all night").closest("li")!;
        await userEvent.click(within(second).getByRole("button"));

        expect(screen.getByText(/no todos/i)).toBeInTheDocument();
    });

});