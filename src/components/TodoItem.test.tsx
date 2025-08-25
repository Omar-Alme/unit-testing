import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import TodoItem from "./TodoItem";

describe("TodoItem (unit)", () => {
    it("renders the label", () => {
        const onDelete = vi.fn();
        render(<TodoItem id="42" label="Test task" onDelete={onDelete} />);

        // label is visible
        expect(screen.getByText("Test task")).toBeInTheDocument();

        // label is inside an <li>
        expect(screen.getByText("Test task").closest("li")).toBeTruthy();
    });

    it("calls onDelete with the correct id when Delete button is clicked", async () => {
        const onDelete = vi.fn();
        render(<TodoItem id="42" label="Test task" onDelete={onDelete} />);

        const deleteBtn = screen.getByRole("button", { name: /delete/i });
        await userEvent.click(deleteBtn);

        expect(onDelete).toHaveBeenCalledWith("42");
        expect(onDelete).toHaveBeenCalledTimes(1);
    });

    it("does not call onDelete without a click", () => {
        const onDelete = vi.fn();
        render(<TodoItem id="42" label="Test task" onDelete={onDelete} />);

        expect(onDelete).not.toHaveBeenCalled();
    });
});
